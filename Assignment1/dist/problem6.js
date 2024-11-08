"use strict";
{
    const updateProfile = (profile, providedUpdates) => {
        return Object.assign(Object.assign({}, profile), providedUpdates);
    };
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { email: 'm@gmail.com' }));
}
