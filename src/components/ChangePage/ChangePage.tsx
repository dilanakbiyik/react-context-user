import React from 'react';
import { useStateValue } from '../../providers/StateProvider';
import {changePage, Page} from "../../App.actions";

interface ChangePageProps {
    page: Page
}

const ChangePage = ({page}: ChangePageProps) => {
    const [state, dispatch] = useStateValue();
    return (
        <button type="button" onClick={() => dispatch(changePage(page))}>Go to {page}</button>
    );
}

export default ChangePage;
