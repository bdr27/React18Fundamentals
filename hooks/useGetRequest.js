import loadingStatus from "@/helpers/loadingStatus";
import {useState, useCallback} from "react";

const useGetRequest = (url) => {
    const [loadingState, setLoadingState] =
        useState(loadingStatus.isLoading);

    const get = useCallback(async () => {
        setLoadingState(loadingStatus.isLoading);
        try{
            const rsp = await fetch(url);
            const result = await rsp.json();
            setLoadingState(loadingStatus.loaded);
            return result;
        }
        catch{
            setLoadingState(loadingStatus.hasErrored);
        }
    }, [url]);
    return {get, loadingState};
}

export default useGetRequest;