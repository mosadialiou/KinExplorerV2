import { connect } from 'react-redux'
import {OperationsTableBody as OperationsTableBodyC} from "../../../components/explorer/Operations/OperationsTableBody";

const mapStateToProps = (state)=> {
	return {
		records: state.BC.hasOwnProperty('operations') ? state.BC['operations'].records || []  : [],
		isMobile: state.UI.isMobile
	}
};


const OperationsTableBody = connect(mapStateToProps,null)(OperationsTableBodyC);
export default 	OperationsTableBody;

