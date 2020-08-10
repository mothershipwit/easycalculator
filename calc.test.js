import { fireEvent, getByText } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom;
let container;

describe('index', () => {
  beforeEach(() => {
    // Constructing a new JSDOM with this option is the key
    // to getting the code in the script tag to execute.
    // This is indeed dangerous and should only be done with trusted content.
    // https://github.com/jsdom/jsdom#executing-scripts
    dom = new JSDOM(html, { runScripts: 'dangerously' });
    container = dom.window.document.body;
  })

  test('has an add button', () => {
    expect(container.querySelector('button')).not.toBeNull();
    expect(getByText(container, '+')).toBeInTheDocument();
  })

  test('has a subtract button', () => {
    expect(container.querySelector('subtractBy')).not.toBeNull();
    expect(getByText(container, '-')).toBeInTheDocument();
  })

  test('can add two number', () => {

    let value = container.querySelector("#firstNumber");
    let value = container.querySelector("#secondNumber");

    fireEvent.change(number1, {target: { value: 3 } });
    fireEvent.change(number2, {target: { value: 2 } });

    const button = getByText(container, '+');
    fireEvent.click(button);

    let result = container.querySelector("#output");
    expect(parseFloat(result.innerHTML)).toBe(5);
  })

})