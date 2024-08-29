import { useRequest } from 'ahooks';
import type { Options } from 'ahooks/lib/useRequest/src/types';

const useResultRequest = (service: any, options?: Options<any, any>) => {
    const info = useRequest(service, options);

    return {
        ...info,
        data: info?.data?.data,
        res: info?.data,
    };
};

export default useResultRequest;
