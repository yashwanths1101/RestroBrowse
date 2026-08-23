const BodyShimmerUI = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='shimmerHeading-container'>
        <div className='shimmerHeading1'></div>
        <div className='shimmerHeading2'></div>
      </div>
      <div className='shimmerBody-container'>
        {Array.from({ length: 10 }).map((_, i) => (
          <div className='shimmer-card' key={i}></div>
        ))}
      </div>
    </div>
  )
}

export default BodyShimmerUI
