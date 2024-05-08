// povezao sam se s aws pošto tamo ne mogu direktno pristupiti podatcima povlacim ih i prikazivam na ovojs stranici


import { sviUseri } from "@/actions/dajsveusere";

sviUseri

const Svi = async() => {
    const users = await sviUseri();
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Dashboard page</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map(user => (
                    <div key={user.id} className="bg-gray-100 p-4 rounded-md overflow-hidden">
                        <p className="font-bold">Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <p>Password: <span className="break-words">{user.password}</span></p>
                        {user.emailVerified && <p>Email Verified: {user.emailVerified.toString()}</p>}
                        {user.image && <p>Image: {user.image}</p>}
                        {/* Dodajte ostale informacije o korisniku koje želite prikazati */}
                        <p className="break-words">Created At: {user.createdAt.toString()}</p>
                        <p>id:{user.id}</p>
                        <p className="break-words">Updated At: {user.updatedAt.toString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Svi;