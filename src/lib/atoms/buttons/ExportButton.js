import React from 'react'
import PropTypes from 'prop-types'
import { CSVLink } from 'react-csv'
import moment from 'moment'
import { get } from 'lodash'

import { Button } from 'LibIndex'


class ExportButton extends React.Component {
  handleReformat = (e, props) => {
    const { data, onExport, onClick } = this.props

    if (onExport) {
      this.setState({ data: onExport(data) })
    } else {
      this.setState({ data })
    }

    if (onClick) {
      onClick(e, props)
    }
  }

  render() {
    const { data, filenamePrefix, onExport, ...rest } = this.props
    const timestamp = moment().format('YYYY_MM_DD-HH_mm_ss')

    const content = React.cloneElement(this.props.content, {
      onClick: this.handleReformat,
    })

    return (
      <CSVLink
        filename={`${filenamePrefix}-${timestamp}.csv`}
        target="" // Bypass AdBlockers
        data={get(this.state, 'data', [])}
        {...rest}
      >
        {content}
      </CSVLink>
    )
  }
}


ExportButton.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape),
  content: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  filenamePrefix: PropTypes.string,
  onExport: PropTypes.func,
  onClick: PropTypes.func,
}

ExportButton.defaultProps = {
  data: [],
  content: <Button content="Export" icon="download" />,
  filenamePrefix: 'export',
}


export default ExportButton
