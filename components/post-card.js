export default function PostCard({ post }) {
  return (
    <div className="p-6 space-y-2.5 border-2 border-slate-600">
      <h2 className="text-xl font-medium">{post.title || 'Title'}</h2>
      <p className="text-slate-500">{post.description || 'Lorem ipsum dolor sit amet consectetur. Malesuada non tempus porta quis tincidunt duis phasellus quam. Egestas gravida facilisi imperdiet et'}</p>
    </div>
  )
}