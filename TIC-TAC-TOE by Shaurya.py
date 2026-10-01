# TIC TAC TOE
# Made by Shaurya Pratap Chaudhary

board = [" ", " ", " ",
         " ", " ", " ",
         " ", " ", " "]

def print_board():
    print()
    print(" ", board[0], "|", board[1], "|", board[2])
    print("----+---+----")
    print(" ", board[3], "|", board[4], "|", board[5])
    print("----+---+----")
    print(" ", board[6], "|", board[7], "|", board[8])
    print()


def check_winner():
    winning_combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for combo in winning_combinations:
        if board[combo[0]] == board[combo[1]] == board[combo[2]]:
            if board[combo[0]] != " ":
                return board[combo[0]]

    return None


print("TIC TAC TOE")
print("Made by Shaurya Pratap Chaudhary")
print()

player_x = input("Enter the name of Player X: ")
player_o = input("Enter the name of Player O: ")

print()
print(player_x, "is X")
print(player_o, "is O")

print()
print("Positions are:")
print("1 | 2 | 3")
print("--+---+--")
print("4 | 5 | 6")
print("--+---+--")
print("7 | 8 | 9")

player = "X"
moves = 0

while True:

    print_board()

    if player == "X":
        current_player = player_x
    else:
        current_player = player_o

    try:
        position = int(input(current_player + "-" + player + ", choose a position (1-9): "))

        if position < 1 or position > 9:
            print("Please enter a number from 1 to 9.")
            continue

        if board[position - 1] != " ":
            print("That position is already taken!")
            continue

        board[position - 1] = player
        moves = moves + 1

        winner = check_winner()

        if winner:

            print_board()

            if winner == "X":
                winner_name = player_x
                loser_name = player_o
            else:
                winner_name = player_o
                loser_name = player_x

            print(winner_name + "-" + winner, "won!")
            print(loser_name + "-" + ("O" if winner == "X" else "X"), "lost!")

            break

        if moves == 9:
            print_board()
            print("It's a draw!")
            break

        if player == "X":
            player = "O"
        else:
            player = "X"

    except:
        print("Please enter a valid number.")
