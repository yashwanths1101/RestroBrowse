const MenuShimmerUI = () => {
  return (
    <div className='menu-shimmer'>
      <div className='menu-image-shimmer' />
      {Array.from({ length: 4 }).map((_, i) => {
        return <div className='menu-details-shimmer1' key={i} />
      })}
      <div className='space' />
      {Array.from({ length: 3 }).map((_, i) => {
        return <div className='shimmerHeading1'></div>
      })}
    </div>
  )
}

export default MenuShimmerUI
