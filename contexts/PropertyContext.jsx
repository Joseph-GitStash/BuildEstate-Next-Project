'use client';

import React, { createContext, useEffect, useState, useMemo } from 'react'

import { listData } from '@/PropertyData';
import { blogList } from '@/BlogData';

export const PropertyContext = createContext();

const PropertyProvider = ({children}) => {
    // const propertyData = listData
    const [properties, setProperties] = useState([]);
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showPropertyList, setShowPropertyList] = useState(false)

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedType, setSelectedType] = useState("");

    // Applied filters after submittion
    const [appliedFilters, setAppliedFilters] = useState({
        searchTerm: "",
        selectedLocation: "",
        selectedType,
    })

    // Filtered properties based on the applied filters
    const filteredProperties = useMemo(() => {
        return properties.filter((property) => {
          // Check search title
          const matchSearch = appliedFilters.searchTerm ? property.title.toLowerCase().includes(appliedFilters.searchTerm.toLowerCase()) : true

          const matchLocation = appliedFilters.selectedLocation ? property.location.toLowerCase() === appliedFilters.selectedLocation.toLowerCase() : true

          const matchType = appliedFilters.selectedType ? property.type.toLowerCase() === appliedFilters.selectedType.toLowerCase() : true

          return matchSearch && matchLocation && matchType ;
        });

    }, [properties, appliedFilters])

     // Fetch properties
     useEffect(() => {
        const fetchProps = () => {
            setIsLoading(true)
            if(listData){
                setProperties(listData)
                setIsLoading(false)
            }
            else{
               setIsLoading(false);
               return new Error("Failed to fetch properties")
            }
        }
        fetchProps()
    }, [])

    // Fetch blog articles
    useEffect(() => {
        const fetchBlogPosts = () => {
            setIsLoading(true)
            if(blogList){
                setArticles(blogList)
                setTimeout(() => {
                    setIsLoading(false)
                }, 2500)
            }
            else{
                setIsLoading(false)
                return new Error("Failed to fetch articles")
            }
        }
        fetchBlogPosts()
    }, [])

    // Handle Submittion
    const handleSubmit = () => {
        setIsLoading(true);
        setShowPropertyList(true);
        setAppliedFilters({searchTerm, selectedLocation, selectedType});
        setTimeout(() => {
            setIsLoading(false)
        }, 2500)
    }

    // Handle Clear Search
    const handleClearSearch = () => {
        setSearchTerm("")
        setSelectedLocation("");
        setSelectedType("")
    }

    return (
        <PropertyContext.Provider 
            value={{
                properties,
                isLoading,
                setIsLoading,
                error,
                searchTerm,
                setSearchTerm,
                filteredProperties,
                handleSubmit,
                handleClearSearch,
                showPropertyList,
                selectedLocation,
                setSelectedLocation,
                selectedType,
                setSelectedType,
                articles
            }} >
                {children}
        </PropertyContext.Provider>
    );
};

export default PropertyProvider;