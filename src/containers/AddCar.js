import { connect } from 'react-redux'
import AddCar from '../components/AddCar'
import {addCar} from '../redux/actions'

const mapDispatchtoProps = (dispatch) => {
    return {
        addACar: (newCar) => dispatch(addCar(newCar)),
    }
}

export default connect(null,mapDispatchtoProps)(AddCar)
