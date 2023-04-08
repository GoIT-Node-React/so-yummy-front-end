import { HashLoader } from 'react-spinners';
import { theme } from 'theme/theme';

export default function Loader(props) {
  return (
    <HashLoader
      color={theme.colors.green[200]}
      cssOverride={{ margin: '0 auto' }}
      size="30px"
      {...props}
    />
  );
}
