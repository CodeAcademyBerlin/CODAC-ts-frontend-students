import { ComponentSectionsHeader } from 'cabServer/global/__generated__/types';

type Props = {
  data: ComponentSectionsHeader;
};

const Header = ({ data }: Props) => {
  console.log('data', data);
  return (
    <>
      <h1>Title: {data.title}</h1>
      <p>Subtitle: {data.subtitle}</p>
    </>
  );
};

export default Header;
