/**
 * This component render dehydrated data into HTML page as inline javascript snippet.
 *
 * Since `react-server` doesn't provide way to customize `writeBody`, we can only make such
 * component to render briefed dehydrated data.
 *
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

function renderDehydrate({initialState}) {

  const inlineScript= {
    __html: `
      HULU = {};
      HULU.INITIAL_STATE = ${JSON.stringify(initialState)}
    `
  };

  return (
    <script dangerouslySetInnerHTML={inlineScript}>
    </script>
  );
}

const mapStateToProps = state => ({ initialState: state })

export default connect(mapStateToProps, null)(renderDehydrate)

