"use client"
import { useEffect, useRef } from "react"

type Grid = { alive: boolean; opacity: number }[][]

const GameOfLife = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Make canvas responsive to container size
    const resizeCanvas = () => {
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }

    // Initial resize
    resizeCanvas()

    // Add resize listener
    window.addEventListener("resize", resizeCanvas)

    let animationFrameId: number
    const cellSize = 4
    const cols = Math.floor(canvas.width / cellSize)
    const rows = Math.floor(canvas.height / cellSize)
    const transitionSpeed = 0.3 // Controls fade speed

    let grid: Grid = Array(rows)
      .fill(null)
      .map(() =>
        Array(cols)
          .fill(null)
          .map(() => ({
            alive: Math.random() > 0.85,
            opacity: Math.random() > 0.85 ? 0.5 : 0,
          })),
      )

    const countNeighbors = (grid: Grid, x: number, y: number): number => {
      let sum = 0
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          const row = (x + i + rows) % rows
          const col = (y + j + cols) % cols
          sum += grid[row][col].alive ? 1 : 0
        }
      }
      sum -= grid[x][y].alive ? 1 : 0
      return sum
    }

    const draw = () => {
      ctx.fillStyle = "#141525"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update opacities
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const cell = grid[i][j]
          if (cell.alive && cell.opacity < 1) {
            cell.opacity = Math.min(cell.opacity + transitionSpeed, 1)
          } else if (!cell.alive && cell.opacity > 0) {
            cell.opacity = Math.max(cell.opacity - transitionSpeed, 0)
          }

          if (cell.opacity > 0) {
            ctx.fillStyle = `rgba(128, 128, 0, ${cell.opacity})`
            ctx.beginPath()
            ctx.arc(
              j * cellSize + cellSize / 2,
              i * cellSize + cellSize / 2,
              1,
              0,
              Math.PI * 2,
            )
            ctx.fill()
          }
        }
      }

      const next = grid.map((row, i) =>
        row.map((cell, j) => {
          const neighbors = countNeighbors(grid, i, j)
          const willBeAlive = cell.alive
            ? neighbors >= 2 && neighbors <= 3
            : neighbors === 3
          return {
            alive: willBeAlive,
            opacity: cell.opacity,
          }
        }),
      )

      grid = next
      setTimeout(() => {
        animationFrameId = requestAnimationFrame(draw)
      }, 125)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`mask pointer-events-none h-[500px] max-h-[50vh] w-full overflow-hidden select-none ${className}`}
    >
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </div>
  )
}

export default GameOfLife
