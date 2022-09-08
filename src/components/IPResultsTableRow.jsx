import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
function IPResultsTableRow(props) {
  function handleViewLocation() {
    props.sendSelectedindex(props.index);
  }
  return (
    <StyledTableRow hover role="checkbox" tabIndex={-1} >
      <StyledTableCell key={props.ipAddress} align={"center"} height="50px">
        {props.ipAddress}
      </StyledTableCell>
      <StyledTableCell key={props.PossibleISP} align={"center"} height="50px">
        {props.possibleISP}
      </StyledTableCell>
      <StyledTableCell align={"center"}>
          <Button variant="outlined" startIcon={<VisibilityIcon/>} onClick={handleViewLocation}>
                View Location On Map
          </Button>
      </StyledTableCell>
    </StyledTableRow>
  );
}

export default IPResultsTableRow;