import Image from 'next/image'
import Link from 'next/link'

// 可以添加游戏类型的interface
interface GameItem {
  title: string;
  slug: string;
  image: string;
  players: number;
}

export default function Sidebar({ post }: { post: any }) {
  if (!post) return
  // 热门游戏数据
  // const popularGames: GameItem[] = [
  //   {
  //     title: "Eggy Car Unblocked 76",
  //     slug: "eggy-car-unblocked-76",
  //     image: "/games/eggy-car.jpg", // 需要添加实际图片
  //     players: 1205
  //   },
  //   // 可以添加更多游戏
  // ]

  return (
    <aside className="md:w-80 md:shrink-0">
      {/* 开始游戏按钮 */}
      <div className="glass mb-6 rounded-xl p-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <Link 
          href={post?.src} 
          className="block text-center py-3 px-6 rounded-lg bg-yellow-400 hover:bg-yellow-500 transition-colors font-bold text-gray-900"
        >
          Play Now! 🎮
        </Link>
      </div>

      {/* 游戏信息卡片 */}
      <div className="glass rounded-xl p-6 bg-gray-800 text-white mb-6">
        <h3 className="font-bold text-xl mb-4 flex items-center">
          <span className="mr-2">🏆</span> Game Stats
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span>Active Players</span>
            <span className="text-green-400">{post?.Stats?.[0]?.players}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Global Ranking</span>
            <span className="text-yellow-400">#{post?.Stats?.[0]?.ranking}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Difficulty</span>
            <div className="flex">
              {"⭐".repeat(post?.Stats?.[0]?.difficulty)}
            </div>
          </div>
        </div>
      </div>

      {/* 相似游戏推荐 */}
      {/* <div className="glass rounded-xl p-6 bg-gray-800 text-white">
        <h3 className="font-bold text-xl mb-4 flex items-center">
          <span className="mr-2">🎯</span> Similar Games
        </h3>
        <div className="space-y-4">
          {popularGames.map((game, index) => (
            <Link 
              href={`/play/${game.slug}`}
              key={index}
              className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div className="w-16 h-16 relative rounded-lg overflow-hidden mr-3">
                <Image
                  fill
                  src={game.image}
                  alt={game.title}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium text-sm">{game.title}</h4>
                <p className="text-xs text-gray-400">
                  {game.players.toLocaleString()} playing
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div> */}

      {/* 控制说明 */}
      <div className="glass rounded-xl p-6 bg-gray-800 text-white mt-6">
        <h3 className="font-bold text-xl mb-4 flex items-center">
          <span className="mr-2">🎮</span> Controls
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <span className="bg-gray-700 px-2 py-1 rounded mr-2">←</span>
            <span>Move Left</span>
          </div>
          <div className="flex items-center">
            <span className="bg-gray-700 px-2 py-1 rounded mr-2">→</span>
            <span>Move Right</span>
          </div>
        </div>
      </div>
    </aside>
  )
}