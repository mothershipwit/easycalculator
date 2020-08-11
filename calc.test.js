import { fireEvent, getByText } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom;
let form;

describe('calculator', () => {
  beforeEach(() => {
    // Constructing a new JSDOM with this option is the key
    // to getting the code in the script tag to execute.
    // This is indeed dangerous and should only be done with trusted content.
    // https://github.com/jsdom/jsdom#executing-scripts
    dom = new JSDOM(html, { runScripts: 'dangerously' });
    form = dom.window.document.body;
  })

  test('has an add button', () => {
    expect(form.querySelector('#add')).not.toBeNull();
    expect(getByText(form, '+')).toBeInTheDocument();
  })
  test('has a multiply button', () => {
    expect(form.querySelector('#multiply')).not.toBeNull();
    expect(getByText(form, '*')).toBeInTheDocument();
  })
  test('has a divide button', () => {
    expect(form.querySelector('#divide')).not.toBeNull();
    expect(getByText(form, '/')).toBeInTheDocument();
  })
  test('has a subtract button', () => {
    expect(form.querySelector('#subtract')).not.toBeNull();
    expect(getByText(form, '-')).toBeInTheDocument();
  })

  test('can add two number', () => {

    let firstNumber = form.querySelector("#firstNumber");
    let secondNumber = form.querySelector("#secondNumber");

    fireEvent.change(firstNumber, {target: { value: 3 } });
    fireEvent.change(secondNumber, {target: { value: 2 } });

    const button = getByText(form, '+');
    fireEvent.click(button);

    let result = form.querySelector("#output");
    console.log(result);
    expect(parseFloat(result.innerHTML)).toBe(5);
  })

  test('can multiply two number', () => {

    let firstNumber = form.querySelector("#firstNumber");
    let secondNumber = form.querySelector("#secondNumber");

    fireEvent.change(firstNumber, {target: { value: 3 } });
    fireEvent.change(secondNumber, {target: { value: 2 } });

    const button = getByText(form, '*');
    fireEvent.click(button);

    let result = form.querySelector("#output");
    console.log(result);
    expect(parseFloat(result.innerHTML)).toBe(6);
  })

  test('can divide two number', () => {

    let firstNumber = form.querySelector("#firstNumber");
    let secondNumber = form.querySelector("#secondNumber");

    fireEvent.change(firstNumber, {target: { value: 4 } });
    fireEvent.change(secondNumber, {target: { value: 2 } });

    const button = getByText(form, '/');
    fireEvent.click(button);

    let result = form.querySelector("#output");
    console.log(result);
    expect(parseFloat(result.innerHTML)).toBe(2);
  })
  test('can subtract two number', () => {

    let firstNumber = form.querySelector("#firstNumber");
    let secondNumber = form.querySelector("#secondNumber");

    fireEvent.change(firstNumber, {target: { value: 3 } });
    fireEvent.change(secondNumber, {target: { value: 2 } });

    const button = getByText(form, '-');
    fireEvent.click(button);

    let result = form.querySelector("#output");
    console.log(result);
    expect(parseFloat(result.innerHTML)).toBe(1);
  })
})