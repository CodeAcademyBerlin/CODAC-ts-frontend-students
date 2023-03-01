import { ComponentSectionsRichText } from 'cabServer/global/__generated__/types';
import ReactMarkdown from 'react-markdown';
type Props = {
  data: ComponentSectionsRichText;
};

const Header = ({ data }: Props) => {
  return <ReactMarkdown>{data?.content || ''}</ReactMarkdown>;
};

export default Header;
