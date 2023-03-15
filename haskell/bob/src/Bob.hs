module Bob (responseFor) where

import           Data.Char (isAlpha)
import           Data.Text (Text)
import qualified Data.Text as T

responseFor :: String -> String
responseFor = responseFor' . T.pack

responseFor' :: Text -> String
responseFor' stm
  | silence = "Fine. Be that way!"
  | isQuestion && isYelling = "Calm down, I know what I'm doing!"
  | isQuestion = "Sure."
  | isYelling = "Whoa, chill out!"
  | otherwise = "Whatever."
  where
    silence = T.null . T.strip $ stm
    isQuestion = (T.last . T.strip $ stm) == '?'
    isYelling = hasAlpha && stm == T.toUpper stm
    hasAlpha = T.any isAlpha stm
