// external
import { connect } from 'react-redux'
// local
import { initialize } from '../../store/actions'

import HomePage from './components/HomePage'

const mapStateToProps = state => {
  const { common, content } = state
  const { homeJournal } = common // 获取首页显示哪一期

  return {
    ...state[homeJournal],
    content
  }
}

export default connect(mapStateToProps, { initialize })(HomePage)
