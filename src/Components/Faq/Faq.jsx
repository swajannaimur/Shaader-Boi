import React from 'react';

const Faq = () => {
    return (
        <div>
            <div className="space-y-4">
                <div className="collapse collapse-arrow bg-base-100 border border-secondary">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title text-primary font-semibold">
                        How do I add a new recipe?
                    </div>
                    <div className="collapse-content text-secondary font-semibold text-sm">
                        Go to the navbar and click on the "Add Recipe" button. Fill in the recipe details and save it to your collection.
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-secondary">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title text-primary font-semibold">
                        Can I see recipes from other users?
                    </div>
                    <div className="collapse-content text-secondary font-semibold text-sm">
                        Yes, navigate to the "All Recipes" section to browse recipes shared by other users. You can also like the ones you enjoy.
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-secondary">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title text-primary font-semibold">
                        How can I edit or delete my recipes?
                    </div>
                    <div className="collapse-content text-secondary font-semibold text-sm">
                        Go to the "My Recipes" section, click on the recipe you want to update, and use the "Edit" or "Delete" option available on the page.
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-secondary">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title text-primary font-semibold">
                        How do likes work in the app?
                    </div>
                    <div className="collapse-content text-secondary font-semibold text-sm">
                        Each user can like a recipe by clicking the heart icon. Recipes with the most likes appear in the "Top Recipes" section, helping highlight popular dishes.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
