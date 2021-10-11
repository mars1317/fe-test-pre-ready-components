import Table from 'components/Table';
import React, {useEffect, useState} from 'react';
import { hot } from 'react-hot-loader';
import { getGroupsPage } from 'api/getGroupsPage';
import { GroupPageDTO } from 'types/Group';
import { GroupDTO } from 'types/Group';
import {TablePaginationObject} from 'types/Table';
import TableCell from 'components/TableCell';
import TableHeader from 'components/TableHeader';
import TableBody from 'components/TableBody';
import Loader from 'components/Loader';
import TableRow from 'components/TableRow';
import Dropdown from 'components/Dropdown';

const App: React.FC = () => {
  const initialPage:number = 1;
  const [data, setData] = useState<GroupPageDTO>()
  const [pageNumber, setPageNumber] = useState(initialPage);

  //dropdown data
  const dropdownName: string = 'Choose Company';
  const insuranceCompanyList:Array<string> = ['Zurich IG', 'UNIQA Company', 'Nationwide' ]
  const dropdownOptions = insuranceCompanyList.map(company => (
    {
      value: company,
      label: company
    } 
  ));

  useEffect(() => {
    getGroupsPage(pageNumber).then(response=>(response) ? setData(response): null)
  }, [pageNumber])

  if(data!==undefined) {
      const pagination:TablePaginationObject = {
        minPage: initialPage,
        maxPage: data.totalPages,
        onPageChange: function(currentPage) {
          setPageNumber(currentPage)
        }
      }  
      return (
        <>
          <Table pagination={pagination}>
            <TableHeader>
              <TableRow>
                <TableCell> Client</TableCell>
                <TableCell> Create time</TableCell>
                <TableCell> Last update time</TableCell>

                <TableCell> Insurance company</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.result.map( (item:GroupDTO, index:number)=>
                <TableRow key={item.name+Math.random()}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.creationDateTime}</TableCell>
                  <TableCell>{item.lastUpdateTime}</TableCell>
                  <TableCell><Dropdown index={index} name={dropdownName} options={dropdownOptions}/></TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </>
       );
  }
  else {
    return (
      <Loader/>
    )
  }
};


export default hot(module)(App);