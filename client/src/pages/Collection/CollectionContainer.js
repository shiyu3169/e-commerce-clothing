import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsLoaded } from '../../redux/shop/shopSelector';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import Collection from './Collection';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectCollectionsLoaded(state)
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

export default CollectionContainer;
