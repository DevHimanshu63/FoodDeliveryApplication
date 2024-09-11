import React, { useContext } from 'react'
import { storeContext } from '../../context/StoreContext'

function Order() {
    const {getTotalAmount} = useContext(storeContext);
    return (
        <div class="flex w-full max-w-screen-xl items-start gap-12 px-4">
        <div class="w-full lg:w-2/3 bg-white p-8 rounded-lg shadow-md mt-16">
            <h1 class="text-3xl font-semibold mb-6 text-gray-800">Delivery Information</h1>

            <div class="space-y-6">
                <div class="flex space-x-4 mb-4">
                    <input class="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="First name" />
                    <input class="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Last name" />
                </div>

                <div class="mb-4">
                    <input class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" placeholder="Enter your email" />
                </div>

                <div class="mb-4">
                    <input class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Street" />
                </div>

                <div class="flex space-x-4 mb-4">
                    <input class="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="City" />
                    <input class="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="State" />
                </div>

                <div class="flex space-x-4 mb-4">
                    <input class="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Zipcode" />
                    <input class="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Country" />
                </div>

                <div class="mb-4">
                    <input class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Phone" />
                </div>
            </div>
        </div>

        <div class="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md mt-16">
            <h1 class="text-2xl font-semibold mb-4">Cart Total</h1>

            <div class="space-y-4">
                <div class="flex justify-between mb-2">
                    <h3 class="text-lg font-medium">Subtotal:</h3>
                    <p class="text-lg font-medium text-gray-900">${getTotalAmount()}</p>
                </div>
                <hr />
                <div class="flex justify-between mb-2">
                    <h3 class="text-lg font-medium">Delivery Fees:</h3>
                    <p class="text-lg font-medium text-gray-900">${getTotalAmount() / 5}</p>
                </div>
                <hr />
                <div class="flex justify-between mb-4">
                    <h3 class="text-lg font-medium">Total:</h3>
                    <p class="text-lg font-medium text-gray-900">${getTotalAmount() + (getTotalAmount() / 5)}</p>
                </div>
                <hr />
                <div class="mt-5 text-center">
                    <button class="w-full px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">Proceed to Payment</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Order