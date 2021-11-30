import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'

const Chart = () => {
  let event // The custom event that will be created
  if (document.createEvent) {
    event = document.createEvent('HTMLEvents')
    event.initEvent('makeChart', true, true)
    event.eventName = 'makeChart'
    window.dispatchEvent(event)
  }

  const Wrapper = styled.div`
    width: 100%;
  `

  return (
    <>
      <Wrapper id="tv_chart_container" />
    </>
  )
}
export default Chart
