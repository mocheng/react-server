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

