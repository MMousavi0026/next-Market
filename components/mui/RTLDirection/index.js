import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import {useTheme} from "@mui/material";

// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const RTLDirection = (props) => {
    const theme = useTheme();
    if(theme.direction === "ltr") return props.children;
    return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

export default RTLDirection;