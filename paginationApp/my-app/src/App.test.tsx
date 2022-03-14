import React from 'react';
import { render as newRender } from '@testing-library/react';
import TableData from "./components/TableData";
import  RowData  from "./components/RowData"
import {MemoryRouter} from "react-router-dom";
import * as redux from "react-redux";

beforeEach(()=>{
	const spyOnUseSelector=jest.spyOn(redux,"useSelector");
	spyOnUseSelector.mockReturnValue([{title:"hello"}]);
	const spyOnUseDispatch=jest.spyOn(redux,"useDispatch");
	const mockUseDispatch=jest.fn();
      spyOnUseDispatch.mockReturnValue(mockUseDispatch)
})
afterEach(()=>{
	jest.restoreAllMocks()
})
const render=(component:any)=>newRender(
	<MemoryRouter>
	{component}
	</MemoryRouter>
	)
const renderApp=()=>render(<TableData/>)
const renderApp1=()=>render(<RowData/>)

test('test to check childelements of table', () => {
  const {queryByTestId} = renderApp();
  const result:any=queryByTestId("table")
  expect(result.childNodes).toHaveLength(2)

});

test('test to check childelements of row', () => {
  const {queryByTestId} = renderApp();
  const result:any=queryByTestId("row1")
  expect(result.childNodes).toHaveLength(5)

});
test('test to check childelements of row', () => {
  const {queryByTestId} = renderApp();
  const result:any=queryByTestId("row2")
  expect(result.childNodes).toHaveLength(5)

});
test('test to check raw data', () => {
  const {getByTestId} = renderApp1();

  expect(getByTestId("row")).toHaveTextContent(JSON.stringify({title:"hello"}))

});