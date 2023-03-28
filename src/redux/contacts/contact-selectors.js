export const getAllContacts = store => store.contacts;

export const getFilteredContacts = ({ contacts, filter }) => {
    if (!filter) {
        return contacts;
    }
    const normalizedFilter = filter.toLowercase();
    const result = contacts.filter(({ name }) => {
        return name.toLowercase().includes(normalizedFilter)
    })
    return result;
};