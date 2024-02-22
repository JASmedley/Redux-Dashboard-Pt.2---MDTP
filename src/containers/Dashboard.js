import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
// import { removeCar } action here
import { removeCar } from '../redux/actions.js'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        cars: state.cars
    }
}

// add mapDispatchToProps function here
const mapDispatchtoProps = (dispatch) => {
    return {
        removeCar: (index) => dispatch(removeCar(index)),
    }
}


export default connect(mapStateToProps,mapDispatchtoProps)(Dashboard)