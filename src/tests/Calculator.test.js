import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add two numbers', () => {
    const button1 = container.getByTestId('number1');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    const addbutton = container.getByTestId('operator-add');
    fireEvent.click(addbutton);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const equalsbutton = container.getByTestId('operator-equals');
    fireEvent.click(equalsbutton)
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should be able to subtact', () => {
    const button7 = container.getByTestId('number7');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    const subtractbutton = container.getByTestId('operator-subtract');
    fireEvent.click(subtractbutton);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const equalsbutton = container.getByTestId('operator-equals');
    fireEvent.click(equalsbutton)
    expect(runningTotal.textContent).toEqual('3');

  })

  it('should be able to multiply two numbers', () => {
    const button3 = container.getByTestId('number3');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    const multiplybutton = container.getByTestId('operator-multiply');
    fireEvent.click(multiplybutton);
    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);
    const equalsbutton = container.getByTestId('operator-equals');
    fireEvent.click(equalsbutton)
    expect(runningTotal.textContent).toEqual('15');
  })

  it('shpould be able to divide two numbers', () => {
    const button2 = container.getByTestId('number2');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const divbutton = container.getByTestId('operator-divide');
    fireEvent.click(divbutton)
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const equalsbutton = container.getByTestId('operator-equals');
    fireEvent.click(equalsbutton)
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should be able to concatenate numbers', () => {
    const button2 = container.getByTestId('number2');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    expect(runningTotal.textContent).toEqual('21');
  })

  it('should be able to chain multiple operations together', () => {
    const button5 = container.getByTestId('number5');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button5);
    const addbutton = container.getByTestId('operator-add');
    fireEvent.click(addbutton);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const subtractbutton = container.getByTestId('operator-subtract');
    fireEvent.click(subtractbutton);
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const equalsbutton = container.getByTestId('operator-equals');
    fireEvent.click(equalsbutton);
    expect(runningTotal.textContent).toEqual('4');
  })

it('should be able to clear the running total without affecting the calculation', () => {
  const runningTotal = container.getByTestId('running-total');
  const button1 = container.getByTestId('number1');
  fireEvent.click(button1);
  const addbutton = container.getByTestId('operator-add');
  fireEvent.click(addbutton);
  const button2 = container.getByTestId('number2');
  fireEvent.click(button2);
  const clear = container.getByTestId('clear');
  fireEvent.click(clear);
  const addbutton2 = container.getByTestId('operator-add');
  fireEvent.click(addbutton2);
  const button3 = container.getByTestId('number3');
  fireEvent.click(button3);
  const equalsbutton = container.getByTestId('operator-equals');
  fireEvent.click(equalsbutton);
  expect(runningTotal.textContent).toEqual('4');
})

})

