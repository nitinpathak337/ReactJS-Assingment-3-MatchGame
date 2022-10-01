import './index.css'

const TabItem = props => {
  const {tabDetails, category, changeCategory} = props
  const {displayText, tabId} = tabDetails
  const activeTab = category === tabId ? 'active' : ''
  const onTabChange = () => {
    changeCategory(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className={`button ${activeTab}`}
        onClick={onTabChange}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
