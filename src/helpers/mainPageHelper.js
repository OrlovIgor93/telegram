import {useCollection} from "react-firebase-hooks/firestore";

export const getDialogsBySearch = (dialogs, searchValue) => {

    return dialogs.filter(dialog => {
        return dialog.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    });

};


export function useLatestDocument(ref) {
    const query = ref && ref.orderBy('timestamp', 'desc').limit(1);
    const { value, loading, error } = useCollection(query);

    return {
        value,
        loading,
        error,
    };
}