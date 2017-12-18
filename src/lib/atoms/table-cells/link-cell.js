import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'LibIndex'
import * as customPropTypes from 'LibSrc/helpers/customPropTypes'
import getElementType from 'LibSrc/helpers/getElementType'
import getUnhandledProps from 'LibSrc/helpers/getUnhandledProps'


class LinkCell extends React.PureComponent {
  render() {
    const { as, linkAs, content } = this.props

    const ElementType = getElementType(LinkCell, { as })
    const rest = getUnhandledProps(LinkCell, this.props)

    return (
      <ElementType {...rest}>
        <Link {...rest} as={linkAs} content={content} />
      </ElementType>
    )
  }
}


LinkCell.propTypes = {
  as: customPropTypes.as,
  rowIndex: PropTypes.number,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]).isRequired,
  linkAs: customPropTypes.as,
}

LinkCell.defaultProps = {
  as: 'div',
  linkAs: 'a',
}

LinkCell.handledProps = ['as', 'rowIndex', 'content', 'linkAs']

export default LinkCell
