import {
  connect,
} from 'react-redux';

/* === import components === */
import Counter from 'src/components/Counter';

/* === import Actions === */
import {
  counterIncrement,
  counterDecrement,
  counterIncrementByAmount,
} from 'src/redux/actions/counter';

/* === State (données) ===
* - mapStateToProps retroune un objet de props pour le composant de présentation
* - mapStateToProps met à dispo 2 params
*  - state : le state du store (getState)
*  - ownProps : les props passées au container
* Pas de data à transmettre ? const mapStateToProps = null;
*/
const mapStateToProps = (state) => ({
  value: state.counter.value,
});

/* === Actions ===
* - mapDispatchToProps retroune un objet de props pour le composant de présentation
* - mapDispatchToProps met à dispo 2 params
*  - dispatch : la fonction du store pour dispatcher une action
*  - ownProps : les props passées au container
* Pas de disptach à transmettre ? const mapDispatchToProps = {};
*/
const mapDispatchToProps = (dispatch) => ({
  counterIncrement: () => {
    dispatch(counterIncrement());
  },

  counterDecrement: () => {
    dispatch(counterDecrement());
  },

  counterIncrementByAmount: (payload) => {
    dispatch(counterIncrementByAmount(payload));
  },
});

// == Export
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
