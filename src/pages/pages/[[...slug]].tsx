import { Page, PageEntity } from 'cabServer/global/__generated__/types';
import {
  GetPagesDocument,
  GetPagesQuery,
} from 'cabServer/queries/__generated__/pages';
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next/types';
import DynamicZoneSections from 'src/components/DynamicZoneSections';
import { getPageData } from 'src/lib/api';
import { initializeApollo } from 'src/lib/apolloClient';

// The file is called [[...slug]].js because we're using Next's
// optional catch all routes feature. See the related docs:
// https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes

const DynamicPage: NextPage = ({
  pageContext,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      {pageContext?.contentSections ? (
        <DynamicZoneSections contentSections={pageContext.contentSections} />
      ) : null}
    </>
  );
};

export default DynamicPage;

const client = initializeApollo(null, null);
export const getStaticPaths = async (context: GetStaticPropsContext) => {
  // Get all pages from Strapi
  const allPages = context.locales
    ? (context.locales.map(async (locale: string) => {
        const {
          data: { pages },
        } = await client.query<GetPagesQuery>({
          query: GetPagesDocument,
          variables: { locale },
        });
        return pages?.data;
      }) as PageEntity[])
    : [];

  const pages = await (await Promise.all(allPages)).flat();
  console.log('pages', pages);
  const paths = pages.map(({ attributes }) => {
    // Decompose the slug that was saved in Strapi
    const { slug, locale } = attributes as Page;
    const slugArray = !slug ? false : slug.split('/');
    console.log('slug', slug);
    return {
      params: { slug: slugArray },
      // Specify the locale to render
      locale,
    };
  });

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const { params, locale, locales, defaultLocale } = context;

  // Fetch pages. Include drafts if preview mode is on
  console.log('params', params);
  const pageData = await getPageData(
    { slug: !params?.slug ? [''] : (params.slug as string[]) },
    locale || '',
  );
  console.log('pageData', pageData);
  if (pageData == null) {
    // Giving the page no props will trigger a 404 page
    return {
      notFound: true,
    };
  }

  // We have the required page data, pass it to the page component
  const { slug, shortName, contentSections } = pageData.attributes as Page;

  const pageContext = {
    // locale,
    // locales,
    // defaultLocale,
    slug,
    shortName,
    contentSections,
  };
  console.log('pageContext', pageContext);
  return {
    props: {
      pageContext: {
        ...pageContext,
      },
    },
    revalidate: 10,
  };
};
