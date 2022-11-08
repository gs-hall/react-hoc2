import React, { useState } from 'react';
import List from './components/List';
import { fetchContent } from './functions/fetchContent';
import "./css/index.css";

export default function App() {
    const [list, setList] = useState(fetchContent());

    return (
        <List list={list} />
    );
}
