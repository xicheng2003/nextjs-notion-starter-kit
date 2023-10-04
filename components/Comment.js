import { useEffect } from 'react';
import { init } from '@waline/client';

import '@waline/client/dist/waline.css';

const WalineComment = () => {
  useEffect(() => {
    init({
      el: '#waline',
      serverURL: 'https://你的Waline后端地址',
      // 此处可以配置更多配置，参考Waline官方文档...
    });
  }, []);

  return <div id="waline" />;
};

export default WalineComment;
