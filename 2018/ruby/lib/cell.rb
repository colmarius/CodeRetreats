class Cell
  def initialize
    @alive = true
  end

  def is_alive?
    @alive
  end

  def die!
    @alive = false
  end

  def live!
    @alive = true
  end
end
