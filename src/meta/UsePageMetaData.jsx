import { useEffect } from 'react';

const UsePageMetaData = (title, description) => {
    useEffect(() => {
        document.title = title;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = description || '';
        }
    }, [title, description]);
};

export default UsePageMetaData;
