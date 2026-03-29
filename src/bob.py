#!/usr/bin/env python3
"""
API Utilities Module

A collection of helper functions for API development.
Provides common utilities for request handling, response formatting,
and error management.

Author: bob
Version: 1.0.0
"""

import json
import hashlib
import time
from typing import Any, Dict, Optional, Union
from dataclasses import dataclass
from enum import Enum


class StatusCode(Enum):
    """HTTP status code enumeration for API responses."""
    OK = 200
    CREATED = 201
    BAD_REQUEST = 400
    UNAUTHORIZED = 401
    NOT_FOUND = 404
    INTERNAL_ERROR = 500


@dataclass
class APIResponse:
    """Standardized API response container."""
    status: StatusCode
    data: Optional[Dict[str, Any]] = None
    message: str = ""
    timestamp: float = time.time()
    
    def to_dict(self) -> Dict[str, Any]:
        """Convert response to dictionary format."""
        return {
            "status": self.status.value,
            "status_name": self.status.name,
            "data": self.data,
            "message": self.message,
            "timestamp": self.timestamp
        }
    
    def to_json(self, indent: int = 2) -> str:
        """Serialize response to JSON string."""
        return json.dumps(self.to_dict(), indent=indent)


def create_response(
    status: StatusCode,
    data: Optional[Dict[str, Any]] = None,
    message: str = ""
) -> APIResponse:
    """
    Create a standardized API response.
    
    Args:
        status: HTTP status code enum value
        data: Optional response payload dictionary
        message: Human-readable status message
    
    Returns:
        APIResponse object with standardized structure
    """
    return APIResponse(status=status, data=data, message=message)


def generate_request_id() -> str:
    """
    Generate a unique request identifier.
    
    Creates a hash-based ID using current timestamp and random data.
    Useful for request tracing and logging.
    
    Returns:
        Hexadecimal string (16 characters)
    """
    timestamp = str(time.time()).encode()
    random_data = str(time.time_ns()).encode()
    hash_input = timestamp + random_data
    return hashlib.md5(hash_input).hexdigest()[:16]


def validate_payload(payload: Dict[str, Any], required_fields: list) -> tuple:
    """
    Validate that a payload contains all required fields.
    
    Args:
        payload: Dictionary to validate
        required_fields: List of field names that must be present
    
    Returns:
        Tuple of (is_valid: bool, missing_fields: list)
    """
    missing = [field for field in required_fields if field not in payload]
    return (len(missing) == 0, missing)


def sanitize_input(value: str, max_length: int = 1000) -> str:
    """
    Sanitize string input for safe processing.
    
    Args:
        value: Input string to sanitize
        max_length: Maximum allowed length (default: 1000)
    
    Returns:
        Sanitized string with limited length and trimmed whitespace
    """
    if not isinstance(value, str):
        value = str(value)
    return value.strip()[:max_length]


if __name__ == "__main__":
    # Demo usage
    response = create_response(
        status=StatusCode.OK,
        data={"user": "bob", "action": "test"},
        message="Operation completed successfully"
    )
    print(response.to_json())
    
    print(f"\nRequest ID: {generate_request_id()}")
    
    payload = {"name": "test", "value": 42}
    is_valid, missing = validate_payload(payload, ["name", "value", "id"])
    print(f"\nValidation: valid={is_valid}, missing={missing}")
