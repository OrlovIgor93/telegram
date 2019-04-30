export const getDialogsBySearch = (dialogs, searchValue) => {

    return dialogs.filter(dialog => {
        return dialog.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    });

};