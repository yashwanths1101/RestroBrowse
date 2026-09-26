import RestaurantCard from './RestaurantCard'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, X, Star } from 'lucide-react'
import useFetchRestaurantData from '../utils/useFetchRestaurantData'

const BodyComponent = () => {
  const [resList, setResList] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [minRating, setMinRating] = useState(null)

  useFetchRestaurantData(setResList, setFilteredList)

  useEffect(() => {
    const query = searchQuery.trim().toLowerCase()
    setFilteredList(
      resList.filter(({ info }) => {
        const matchesName = info?.name?.toLowerCase().includes(query)
        const matchesRating =
          minRating === null || Number(info?.avgRating) >= minRating
        return matchesName && matchesRating
      })
    )
  }, [resList, searchQuery, minRating, setFilteredList])

  return (
    <div className='body'>
      <div className='filter-container'>
        <label className='search-container'>
          <Search className='search-icon' aria-hidden='true' />
          <input
            className='search-box'
            name='search'
            type='text'
            placeholder='Search restaurants'
            aria-label='Search restaurants'
            value={searchQuery}
            onChange={event => setSearchQuery(event.target.value)}
          />
          {searchQuery && (
            <button
              className='search-clear'
              type='button'
              aria-label='Clear search'
              onClick={() => setSearchQuery('')}
            >
              <X aria-hidden='true' />
            </button>
          )}
        </label>

        <div className='rating-filter'>
          <select
            className='rating-select'
            aria-label='Minimum restaurant rating'
            value={minRating === null ? 'any' : String(minRating)}
            onChange={event =>
              setMinRating(
                event.target.value === 'any' ? null : Number(event.target.value)
              )
            }
          >
            <option value='any'>Top rated</option>
            <option value='3.5'>3.5+ stars</option>
            <option value='4'>4.0+ stars</option>
            <option value='4.5'>4.5+ stars</option>
          </select>
          {minRating !== null && (
            <button
              className='rating-clear'
              type='button'
              aria-label='Clear rating filter'
              title='Clear rating filter'
              onClick={() => setMinRating(null)}
            >
              <X aria-hidden='true' />
            </button>
          )}
        </div>
      </div>

      {filteredList.length > 0 ? (
        <div className='res-container'>
          {filteredList.map(restaurant => (
            <Link
              to={'restaurant/' + restaurant?.info?.id}
              state={restaurant?.info}
              key={restaurant?.info?.id}
            >
              <RestaurantCard data={restaurant} />
            </Link>
          ))}
        </div>
      ) : resList.length > 0 ? (
        <p className='empty-results'>
          No restaurants found.{' '}
          <button
            type='button'
            onClick={() => {
              setSearchQuery('')
              setMinRating(null)
            }}
          >
            Clear filters
          </button>
        </p>
      ) : null}
    </div>
  )
}

export default BodyComponent
