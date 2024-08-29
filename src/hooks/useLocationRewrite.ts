import { useLocation, useNavigate, useParams } from 'react-router-dom';
import type { Location } from "react-router-dom";

function getSearchData(url: string) {
    const params: { [key: string]: string } = {};
    let href = url;
    href = href.substring(href.indexOf('?') + 1);
    const arr = href.split('&');
    arr.forEach((item) => {
        let a = item.split('=');
        params[a[0]] = a[1];
    });
    return params;
}



export default () => {
    const location = useLocation();
    const params = useParams();
    const history = useNavigate();
    const query = new URLSearchParams(location.search);
    const data: {
        queryData: any;
        query: URLSearchParams;
        navigate: ReturnType<typeof useNavigate>;
    } & Location = {
        ...location,
        queryData: getSearchData(location.search),
        query,
        ...params,
        navigate: history,
    };
    Object.defineProperty(data, 'queryData', {
        enumerable: false,
        writable: false,
        configurable: false,
    });

    return data;
};
