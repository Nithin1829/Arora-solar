
                    document.addEventListener("DOMContentLoaded", function() {
                        const scrollContainer = document.getElementById("scroll-container");
                        const scrollContent = document.getElementById("scroll-content");
                        const dotsContainer = document.getElementById("dots-container");
                        const cards = scrollContent.children;
                        const cardWidth = cards[0].clientWidth + 16; // Card width + margin
                        let currentIndex = 0;
                        let autoScrollInterval;
            
                        function createDots() {
                            for (let i = 0; i < cards.length; i++) {
                                const dot = document.createElement("span");
                                dot.classList.add("dot", "bg-gray-500", "rounded-full", "h-4", "w-4", "mx-2", "cursor-pointer");
                                dot.addEventListener("click", () => {
                                    scrollToCard(i);
                                    resetAutoScroll();
                                });
                                dotsContainer.appendChild(dot);
                            }
                            updateDots();
                        }
            
                        function scrollToCard(index) {
                            scrollContainer.scrollTo({
                                left: index * cardWidth,
                                behavior: 'smooth'
                            });
                            currentIndex = index;
                            updateDots();
                        }
            
                        function updateDots() {
                            const dots = dotsContainer.children;
                            for (let i = 0; i < dots.length; i++) {
                                dots[i].classList.remove("bg-gray-700");
                                if (i === currentIndex) {
                                    dots[i].classList.add("bg-gray-700");
                                }
                            }
                        }
            
                        function autoScroll() {
                            currentIndex = (currentIndex + 1) % cards.length;
                            scrollToCard(currentIndex);
                        }
            
                        function startAutoScroll() {
                            autoScrollInterval = setInterval(autoScroll, 3000); // Change every 3 seconds
                        }
            
                        function resetAutoScroll() {
                            clearInterval(autoScrollInterval);
                            startAutoScroll();
                        }
            
                        createDots();
                        startAutoScroll();
            
                        scrollContainer.addEventListener("scroll", () => {
                            const scrollLeft = scrollContainer.scrollLeft;
                            currentIndex = Math.round(scrollLeft / cardWidth);
                            updateDots();
                        });
                    });
           