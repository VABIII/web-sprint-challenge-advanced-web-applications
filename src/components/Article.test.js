import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';
import Article from './Article';

const testArticle = {
    headline: "Test headline",
    author: "Test Author",
    summary: "Test Summary",
    body: "Test Body"

}



test('renders component without errors', ()=> {

});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={testArticle}/>)
    const headline = screen.queryByText(/test headline/i);
    const author = screen.queryByText(/test author/i);
    const summary = screen.queryByText(/test summary/i);
    const body = screen.queryByText(/test body/i);
    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(body).toBeInTheDocument();
});

// test('renders "Associated Press" when no author is given', ()=> {
// });

// test('executes handleDelete when the delete button is pressed', ()=> {
// });

//Task List:
//1. Complete all above tests. Create test article data when needed.