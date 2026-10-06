import { useEffect } from 'react'

const cuisineCategoryMap = {
  'South Indian': 'SouthIndian',
  Andhra: 'SouthIndian',
  Kerala: 'SouthIndian',
  Telangana: 'SouthIndian',
  'North Indian': 'NorthIndian',
  Tandoor: 'NorthIndian',
  Curry: 'NorthIndian',
  'Curry Point': 'NorthIndian',
  Mughlai: 'NorthIndian',
  Biryani: 'Biryani',
  Hyderabadi: 'Biryani',
  Kebabs: 'Biryani',
  Chinese: 'Chinese',
  Asian: 'Chinese',
  Korean: 'Chinese',
  Burmese: 'Chinese',
  Tibetan: 'Chinese',
  'Fast Food': 'Snacks',
  Snacks: 'Snacks',
  Burgers: 'Burgers',
  'Rolls & Wraps': 'Snacks',
  'Street Food': 'Snacks',
  Chaat: 'Snacks',
  Pizzas: 'Pizza',
  Pizza: 'Pizza',
  Italian: 'Pizza',
  'Italian-American': 'Pizza',
  Pastas: 'Pizza',
  Desserts: 'Deserts',
  Bakery: 'Deserts',
  Sweets: 'Deserts',
  'Ice Cream': 'Deserts',
  'Ice Cream Cakes': 'Deserts',
  'Cakes & Pastries': 'Deserts',
  Waffle: 'Deserts',
  Beverages: 'Beverages',
  Juices: 'Beverages',
  'Healthy Food': 'Healthy',
  Salads: 'Healthy',
  'Home Food': 'Healthy',
  Thalis: 'Healthy',
  Cafe: 'Healthy',
  Paan: 'Healthy',
  Florist: 'Healthy',
  Batter: 'Healthy',
  'North Eastern': 'Healthy'
}

const categoryMenuMap = {
  SouthIndian: () => import('../utils/menu/SouthIndianMenu.json'),
  NorthIndian: () => import('../utils/menu/NorthIndianMenu.json'),
  Biryani: () => import('../utils/menu/BiryaniMenu.json'),
  Chinese: () => import('../utils/menu/ChineseMenu.json'),
  Snacks: () => import('../utils/menu/SnacksMenu.json'),
  Burgers: () => import('../utils/menu/BurgersMenu.json'),
  Pizza: () => import('../utils/menu/PizzaMenu.json'),
  Deserts: () => import('../utils/menu/DesertsMenu.json'),
  Beverages: () => import('../utils/menu/BeveragesMenu.json'),
  Healthy: () => import('../utils/menu/HealthyMenu.json')
}

const getMenu = async cuisines => {
  for (const cuisine of cuisines) {
    const category = cuisineCategoryMap[cuisine]

    if (category) {
      const loadMenu = categoryMenuMap[category]
      const module = await loadMenu()

      return module.default
    }
  }

  const module = await categoryMenuMap.Biryani()
  return module.default
}

const useRestaurantMenu = (menu, setMenu, cuisines) => {
  useEffect(() => {
    fetchMenu()
  }, [])

  const fetchMenu = async () => {
    const response = await getMenu(cuisines)
    setMenu(response)
  }
}

export default useRestaurantMenu
