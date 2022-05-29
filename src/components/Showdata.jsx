import React from 'react'
import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from '@chakra-ui/react'

const Showdata = ({ value , handleDelete }) => {

  return (
    <div>
      <TableContainer>
        <Table variant='simple'>
          <Tbody>
            <Tr>
              <Td>{value.username}</Td>
              <Td>{value.age}</Td>
              <Td>{value.address}</Td>
              <Td>{value.salary}</Td>
              <Td>{value.department}</Td>
              <Td>{value.state}</Td>
              <Td  onClick={() => handleDelete(value.id)}>X</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Showdata
