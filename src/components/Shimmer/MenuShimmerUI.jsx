const MenuShimmerUI = () => {
  return (
    <div className='menu-shimmer'>
      <div className='menu-image-shimmer' />
      {Array.from({ length: 4 }).map((_, i) => {
        return <div key={i} className='menu-details-shimmer1' />
      })}
      <div className='space' />
      {Array.from({ length: 3 }).map((_, i) => {
        return <div key={i} className='shimmerHeading1'></div>
      })}
    </div>
  )
}

export default MenuShimmerUI
