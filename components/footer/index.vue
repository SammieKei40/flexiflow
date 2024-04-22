<template>
    <footer className="bg-[#0C0725] relative px-2 md:px-32 md:py-10 py-3 ">


        <div className="mt-10">
            <div className="mx-auto w-full ">
                <div className="lg:flex lg:justify-between">
                    <div className="mb-6 flex flex-col gap-5 md:mb-0">
                        <img src="/flexiflow-white.png" className="h-10 mr-3 w-[154px]" alt="Pepcode Logo" />

                        <p className="text-md  font-normal text-[#A6A6A6]">
                            Get started with our free plan now!
                        </p>

                        <div class="relative  rounded-full  md:w-[410px] shadow">
                            <input ref="emailInputRef" type="text" name="email" placeholder="Enter your email"
                                class="pl-4 pr-20 w-[374px] md:w-full py-5 rounded-full  text-sm bg-[#0C0725] border-2 border-gray placeholder-[#A6A6A6] border-opacity-20" />
                            <button type="submit"
                                class="absolute hover:bg-[#000] hover:duration-300 hover:ease-linear inset-y-0 m-2 right-5 md:right-0 flex items-center px-4 font-bold text-[#fff] bg-pink rounded-full ">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>

                            </button>


                        </div>
                    </div>
                    <div className="grid grid-cols-2  md:grid-cols-3 gap-6 sm:gap-6 ">
                        <div>
                            <h1 className="mb-6 text-lg font-semibold text-[#F9FDFF]  ">
                                Company
                            </h1>
                            <ul className="text-[#A6A6A6] font-normal">
                                <li className="mb-4 ">
                                    <nuxt-link to="#" className="hover:underline text-[#A6A6A6]">
                                        Help centre
                                    </nuxt-link>
                                </li>
                                <li className="mb-4">
                                    <nuxt-link to="#" className="hover:underline">
                                        Account information
                                    </nuxt-link>
                                </li>
                                <li className="mb-4">
                                    <nuxt-link to="#" className="hover:underline">
                                        About
                                    </nuxt-link>
                                </li>
                                <li className="mb-4">
                                    <nuxt-link to="#" className="hover:underline">
                                        Contact us
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="mb-6 text-lg font-semibold text-[#F9FDFF] ">
                                Help and Solution
                            </h1>
                            <ul className="text-[#A6A6A6] font-normal">
                                <li className="mb-4">
                                    <span className="">Talk to support</span>
                                </li>
                                <li className="mb-4">
                                    <span className="">Support docs</span>
                                </li>
                                <li className="mb-4">
                                    <span className="">System status</span>
                                </li>
                                <li className="mb-4">
                                    <span className="">Covid responde</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="mb-6 text-lg font-semibold text-[#F9FDFF] ">
                                Product
                            </h1>
                            <ul className="text-[#A6A6A6] font-normal">
                                <li className="mb-4">
                                    <span className="">Update</span>
                                </li>
                                <li className="mb-4">
                                    <span className="">Security</span>
                                </li>
                                <li className="mb-4">
                                    <span className="">Beta test</span>
                                </li>
                                <li className="mb-4">
                                    <span className="">Pricing product</span>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row items-center text-[#fff] mt-10 justify-between">
            <span className="text-base ">
                © 2024 Biccas Inc. Copyright and rights reserved
            </span>

            <span>
                <nuxt-link to="https://sammiekei-portfolio.netlify.app" className="" target="blank">
                    Built by Sammie Kei
                </nuxt-link>
            </span>
        </div>
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>