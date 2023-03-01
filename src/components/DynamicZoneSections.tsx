import { PageContentSectionsDynamicZone } from 'cabServer/global/__generated__/types';
import { FC } from 'react';

import Header from './dynamic-components/header';
import Markdown from './dynamic-components/markdown';

// Map Strapi sections to dynamicZone components
const contentSectionsList = {
  ComponentSectionsHeader: Header,
  ComponentSectionsRichText: Markdown,
};

type contentSectionsType = typeof contentSectionsList;

// Display a dynamicZone individually
const Zone = ({ data }: { data: PageContentSectionsDynamicZone }) => {
  console.log('data', data);
  // Prepare the component
  const DynamicComponent: FC<{ data: any }> =
    contentSectionsList[data.__typename as keyof contentSectionsType];

  if (!DynamicComponent) {
    return null;
  }

  // Display the dynamicZone
  return <DynamicComponent data={data} />;
};

// Display the list of dynamicZones
const DynamicZoneSections = ({
  contentSections,
}: {
  contentSections: PageContentSectionsDynamicZone[];
}) => {
  return (
    <>
      {contentSections.map((component, index) => (
        <Zone data={component} key={`${component.__typename}_${index}`} />
      ))}
    </>
  );
};

export default DynamicZoneSections;
